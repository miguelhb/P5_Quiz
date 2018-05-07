//Definition of the Quiz model:
module.exports = function(sequelize, DataTypes){
	return sequelize.define('quiz',
		{
			question: {
				type: DataTypes.STRING,
				validate: {noEmpty: {msg: "Question must not be empty"}}
			},
			answer: {
				type: DataTypes.STRING,
				validate: {noEmpty: {msg: "Answer must not be empty"}}
			}
		});
};
