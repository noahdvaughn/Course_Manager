'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      // define association here
      Course.belongsToMany(models.Student, {
        as: 'student_course',
        through: models.Student_Course,
        foreignKey: 'studentId'
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
