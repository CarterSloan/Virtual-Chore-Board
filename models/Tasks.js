const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Tasks model
class Tasks extends Model {

}
Tasks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         task_points: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
    
        users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
    },
    // This was added after tutoring session- not sure if I need this
        kids_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'kids',
        key: 'id'
      }
    }
  },
    {
    
        sequelize,
        modelName: 'tasks',
        freezeTableName: true,
        timestamps: false,
        underscored: true
    
}
);
    module.exports = Tasks;