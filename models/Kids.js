const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Kids.hasMany(Task, {
    foreignKey: 'Kids_id'
  });

  Tasks.belongsTo(Kids, {
    foreignKey: 'Kids_id',
  });
// create our Post model
class Kids extends Model {

}
Kids.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        child_name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         current_points: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         banked_points: {
             type:DataTypes.INTEGER,
             allowNull: true, 
             unique: true,
            },
        task_id: {
              type: DataTypes.INTEGER,
              references: {
                  model: 'Tasks',
                  key: 'id'
              }
             },
        task_name: {
            type: DataTypes.STRING,
            references: {
                model: 'Tasks',

            }
        }
    
    },
    {
    
        sequelize,
        modelName: 'Kids',
        freezeTableName: true,
        underscored: true
    
}
);
    module.exports = Kids;