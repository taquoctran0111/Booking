let express = require("express");
let router = new express.Router();

let {getTravel, getTravels, createTravel, updateTravel, deleteTravel} = require("./travelServices");

router.get("/", async (req, res, next) => {
    try {
      let result = await getTravels();
      if (result === null) {
        return res.status(404).send({message: "Not found travels"});
      }
      return res.send({result});
    } catch (error) {
        console.log(error);
      return res.status(500).send({error: "Server Error"});
    }
});

router.get("/:travelId", async (req, res, next) => {
    try {
      let {travelId} = req.params;
      let result = await getTravel(travelId);
      if (result === null) {
        return res.status(404).send({message: "Not found travel"});
      }
      return res.send({result});
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
});

router.post("/", async (req, res, next) => {
    try {
      let name = req.body.name;
      let address = req.body.address;
      let city_id = req.body.city_id;
      let price = req.body.price;
      let num_room = req.body.num_room;
      let image = req.body.image;
      let thumbnail = req.body.thumbnail;
      let description = req.body.description;

      let result = await createTravel(name, address, city_id, price, num_room, image, thumbnail, description);
      return res.send({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
});

router.put("/:travelId", async (req, res, next) => {
  try {
    let {travelId} = req.params;
    let name = req.body.name;
    let address = req.body.address;
    let city_id = req.body.city_id;
    let price = req.body.price;
    let num_room = req.body.num_room;
    let image = req.body.image;
    let thumbnail = req.body.thumbnail;
    let description = req.body.description;

    let result = await updateTravel(travelId, name, address, city_id, price, num_room, image, thumbnail, description);
    if (result === null) {
      return res.status(404).send({message: "Update fail!"});
    }
    return res.send({
      message: "Update successfully.",
      data: result
    });
  } catch (error) {
    return res.status(500).send({error: "Server Error"});
  }
});

router.delete("/:travelId", async (req, res, next) => {
  try {
    let {travelId} = req.params;
    let result = await deleteTravel(travelId);
    if (result === null) {
      return res.status(404).send({message: "Delete fail"});
    }
    return res.send({
      message: "Delete successfully.",
      data: result
    });
  } catch (error) {
    return res.status(500).send({error: "Server Error"});
  }
});
module.exports = router;