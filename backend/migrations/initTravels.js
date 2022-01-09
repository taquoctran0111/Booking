"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "tbl_travels",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                address: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                city_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                price: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                num_room: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                image: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                thumbnail: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                description: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                created_at: {
                    type: Sequelize.DATE(3),
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
                },
                updated_at: {
                    type: Sequelize.DATE(3),
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"),
                },
            }
        ).then(()=>{
            return queryInterface.addIndex("tbl_travels", ["id"])
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("tbl_travels");
    }
}