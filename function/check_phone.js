const getPoolConnection = require('../db/dbConnection.js');

function checkMemberPhone(memberPhone) {
    const sql = 'SELECT phone FROM member WHERE phone=?';
    return new Promise((resolve, reject) => {
        getPoolConnection(connection=>{
            connection.execute(sql, [memberPhone], (error, rows)=> {
                connection.release();
                if (error) {
                    reject(error);
                } else if (rows.length === 0) {
                    resolve(null);
                } else {
                    resolve(rows[0].phone);
                }
            });
        });
    });
}


function checkStorePhone(storePhone) {
    const sql = 'SELECT phone FROM store WHERE phone=?';
    return new Promise((resolve, reject) => {
        getPoolConnection(connection=>{
            connection.execute(sql, [storePhone], (error, rows) => {
                connection.release();
                if (error) reject(error);
                else {
                    if(rows.length === 0) {
                        resolve(null);
                    } else {
                        resolve(rows[0].phone);
                    }
                }
            });
        })
    });
}



module.exports = {
    member: checkMemberPhone,
    store : checkStorePhone
}