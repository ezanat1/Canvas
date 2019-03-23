// const db = mysql.createConnection({
//     host: 'localhost',
//     port: '8889',
//     user: 'root',
//     password: 'root',
//     database: 'canavs'

// })

// db.connect((err) => {
//     if (err) {
//         console.log(err);

//     }
//     console.log('MYsql connected');

// })

// //Body parser
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// //cors
// app.use(cors())
// // app.use('/students', Router)

// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE canavs'
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('database created');
//     });
// });

// app.get('/createStudent', (req, res) => {
//     let sql = 'CREATE TABLE student(id int AUTO_INCREMENT,name VARCHAR(255),email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('Student tabel created')

//     })
// })

// app.get('/addStudent', (req, res) => {
//     let student = {
//         name: 'ezana tesfaye',
//         email: 'ezex.55@gmail.com',
//         password: 'Ekmys@123'
//     }
//     let sql = 'INSERT INTO student SET ?';
//     let query = db.query(sql, student, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('Student added')

//     })
// })