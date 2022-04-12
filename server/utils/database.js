import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('logindb', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost', 
    define:{
        timestamps: false
    }
});

export default sequelize;