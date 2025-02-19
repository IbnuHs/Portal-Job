import { DataTypes } from "sequelize";
import db from "../config/db.js";
import User from "./user.model.js"; 

const Job = db.define("job", {
  id: {
    allowNull: false,
    type: DataTypes.STRING,
    primaryKey: true,
  },
  judul: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  deskripsi: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  gaji: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  kategori: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lokasi: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  user_id: {
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: User, 
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});


User.hasMany(Job, { foreignKey: "user_id" });
Job.belongsTo(User, { foreignKey: "user_id" });


const syncJob = async () => {
  await Job.sync();
};
syncJob();

export default Job;
