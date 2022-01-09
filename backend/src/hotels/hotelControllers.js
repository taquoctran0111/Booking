let express = require("express");
let router = new express.Router();

let {getHotel, getHotels, createHotel} = require("./hotelServices");

router.get("/", async (req, res, next) => {
    try {
      let result = await getHotels();
      if (result === null) {
        return res.status(404).send({message: "Not found hotels"});
      }
      return res.send({result});
    } catch (error) {
        console.log(error);
      return res.status(500).send({error: "Server Error"});
    }
});

router.get("/:hotelId", async (req, res, next) => {
    try {
      let {hotelId} = req.params;
      let result = await getHotel(hotelId);
      if (result === null) {
        return res.status(404).send({message: "Not found hotel"});
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

      let result = await createHotel(name, address, city_id, price, num_room, image, thumbnail, description);
      return res.send({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
});

module.exports = router;