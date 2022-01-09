
let {Travel} = require("./travelModels");

let findOneModel = async (model, id) => {
    return await model.findOne({
      attributes: {exclude: ["password", "role"]},
      where: {
        id: id,
      },
    });
}

let getTravels = async () => {
    let getTravels = await Travel.findAll();
    if (getTravels === null) {
        return null
      }
    return {
        travel: getTravels,
    };
}

let getTravel = async (travelId) => {
    let getTravel = await findOneModel(Travel, travelId);
    if (getTravel === null) {
      return null
    }
    return {
      travel: getTravel,
    };
}
let createTravel = async (name, address, city_id, price, num_room, image, thumbnail, description) => {
    let result = await Travel.findOrCreate({
      where: {
        name: name,
        address: address,
        city_id: city_id,
        price: price,
        num_room: num_room,
        image: image,
        thumbnail: thumbnail,
        description: description
      }
    });
    return result[0];
}
let updateTravel = async (travelId, name, address, city_id, price, num_room, image, thumbnail, description) => {
    let getTravel = await findOneModel(Travel, travelId);
    if (getTravel === null) {
      return null
    }
    await Travel.update({
      name: name,
      address: address,
      city_id: city_id,
      price: price,
      num_room: num_room,
      image: image,
      thumbnail: thumbnail,
      description: description
    }, {
      where: {
        id: travelId
      }
    })
    let result = await findOneModel(Travel, travelId);
    return result
}

let deleteTravel = async (travelId) => {
  let getTravel = await findOneModel(Travel, travelId);
  if (getTravel === null) {
    return null
  }
  await Travel.destroy({
    where: {
      id: travelId
    }
  })
  return {}
}
module.exports = {
    getTravel,
    getTravels,
    createTravel,
    updateTravel,
    deleteTravel
};