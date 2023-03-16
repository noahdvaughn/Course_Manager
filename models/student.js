'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Course, {
        as: 'student_course',
        through: models.Student_Course,
        foreignKey: 'studentId'
      })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return student
}
