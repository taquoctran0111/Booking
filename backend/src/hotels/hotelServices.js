
let {Hotel} = require("./hotelModels");

let findOneModel = async (model, id) => {
    return await model.findOne({
      attributes: {exclude: ["password", "role"]},
      where: {
        id: id,
      },
    });
}

let getHotels = async () => {
    let getHotels = await Hotel.findAll();
    if (getHotel === null) {
        return null
      }
    return {
        hotels: getHotels,
    };
}

let getHotel = async (hotelId) => {
    let getHotel = await findOneModel(Hotel, hotelId);
    if (getHotel === null) {
      return null
    }
    return {
      hotel: getHotel,
    };
}
let createHotel = async (name, address, city_id, price, num_room, image, thumbnail, description) => {
    let result = await Hotel.findOrCreate({
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
let updateHotel = async (hotelId, name, address, city_id, price, num_room, image, thumbnail, description) => {
    let getHotel = await findOneModel(Hotel, hotelId);
    if (getHotel === null) {
      return null
    }
    await Hotel.update({
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
        id: hotelId
      }
    })
    let result = await findOneModel(Hotel, hotelId);
    return result
}

let deleteHotel = async (hotelId) => {
  let getHotel = await findOneModel(Hotel, hotelId);
  if (getHotel === null) {
    return null
  }
  await Hotel.destroy({
    where: {
      id: hotelId
    }
  })
  return {}
}
module.exports = {
    getHotel,
    getHotels,
    createHotel,
    updateHotel,
    deleteHotel
};