const db = require('../db');
const bcrypt = require('bcrypt');

function addUser (req, res){
  const { first_name, last_name, account_number, ifsc_code, pin, balance, user_email } = req.body;
  const checkAccountNumberQuery = `SELECT * FROM atm.atm_users WHERE account_number = $1`;
  const addUserQuery = `INSERT INTO atm.atm_users(first_name, last_name, account_number, ifsc_code , pin, balance, user_email) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  db.query(checkAccountNumberQuery, [account_number], (checkAccountNumberError, checkAccountNumberResult) => {
    if(checkAccountNumberError){
      console.error('Error executing query', checkAccountNumberError);
      return res.status(400).json({message : 'Error checking account number'});
    }
    if(checkAccountNumberResult.rows.length > 0){
      return res.status(403).json({message : 'Account number already exists'});
    }
    bcrypt.hash(pin, 10, (err, hash) => {
      const values = [first_name, last_name, account_number, ifsc_code, hash, balance, user_email];
      db.query(addUserQuery, values, (addUserError, addUserResult) => {
        if (addUserError) {
          console.error('Error executing query', addUserError);
          res.status(400).json({message : 'Error adding user'});
        } else {
          res.status(201).json({message : 'User added'});
        }
      });
    });
  });
}

function getUserDetails(req , res){
  const account_number = req.params.acc_no;
  const getUserDetailsQuery = `SELECT * FROM atm.atm_users WHERE account_number = $1`;

  db.query(getUserDetailsQuery, [account_number], (getUserDetailsError, getUserDetailsResult) => {
    if(getUserDetailsError){
      console.error('Error executing query', err.stack);
      return res.status(400).json({message : 'Error getting user details'});
    }
    if(getUserDetailsResult.rows.length === 0){
      return res.status(404).json({message : 'User not found'});
    }
    res.status(200).json({message : 'User details', data : getUserDetailsResult.rows[0]});
  });
}

function debitMoney(req, res){
  const { account_number, amount, pin, ifsc_code } = req.body;
  const checkPinQuery = `SELECT * FROM atm.atm_users WHERE account_number = $1`;
  const checkIFSCodeQuery = `SELECT * FROM atm.atm_users WHERE account_number = $1 AND ifsc_code = $2`;
  const getUserDetailsQuery = `SELECT * FROM atm.atm_users WHERE account_number = $1`;
  const updateBalanceQuery = `UPDATE atm.atm_users SET balance = balance - $1 WHERE account_number = $2`;
  const creditQuery = `UPDATE atm.atm_users SET balance = balance + $1 WHERE account_number = $2;`;

  db.query(getUserDetailsQuery, [account_number], (getUserDetailsError, getUserDetailsResult) => {
    if(getUserDetailsError){
      console.error('Error executing user details query', getUserDetailsError);
      return res.status(400).json({message : 'Error getting user details'});
    }
    if(getUserDetailsResult.rows.length === 0){
      return res.status(404).json({message : 'User not found'});
    }
    if(getUserDetailsResult.rows[0].balance < amount){
      return res.status(400).json({message : 'Insufficient balance'});
    }
    db.query(checkIFSCodeQuery, [account_number, ifsc_code], (checkIFSCodeError, checkIFSCodeResult) => {
      if(checkIFSCodeError){
        console.error('Error executing ifsc code query', checkIFSCodeError);
        return res.status(400).json({message : 'Error checking ifsc code'});
      }
      if(checkIFSCodeResult.rows.length === 0){
        return res.status(400).json({message : 'Invalid ifsc code'});
      }
      const getUserDetails = getUserDetailsResult.rows[0];
      bcrypt.compare(pin, getUserDetails.pin, (err, result) => {
      if(err){
        console.error('Error comparing pin', err);
        return res.status(400).json({message : 'Error comparing pin'});
      }
      if(!result){
        return res.status(400).json({message : 'Invalid pin'});
      }
      db.query(checkPinQuery,[result], (checkPinError, checkPinResult) => {
      if(checkPinError){
        console.error('Error executing pin check query', checkPinError);
        return res.status(400).json({message : 'Error checking pin'});
      }
          db.query(updateBalanceQuery, [parseFloat(amount), account_number], (updateBalanceError, updateBalanceResult) => {
            if(updateBalanceError){
              console.error('Error executing account number query', updateBalanceError);
              return res.status(400).json({message : 'Error updating balance'});
            }
            const bankAccountId = '1111111111';
            db.query(creditQuery, [amount, bankAccountId], (creditError, creditResult) => {
              if(creditError){
                console.error('Error executing updating bank query', creditError);
                return res.status(400).json({message : 'Error crediting money'});
              }
              res.status(200).json({message : 'Money debited'});
            });
          });
        });
      });
    });
  });
}

module.exports = {
  addUser,
  getUserDetails,
  debitMoney,
}