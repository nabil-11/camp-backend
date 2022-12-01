var {event} = require('../models')

const createevent = async (req, res, next) => {
  const {Gov_depart, Deleg_depart, Lieu_Exact_depart,Gov_dist,Deleg_dist,Lieu_Exact_dist,nbr,date_depart} = req.body;
 console.log(req.body)
  try {
    const createdevent = await event.create({
      Gov_depart, Deleg_depart, Lieu_Exact_depart,Gov_dist,Deleg_dist,Lieu_Exact_dist,etat:true,nbr,date_depart
    });
    res.status(201).json({
      createdevent
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getevent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const eventData = await event.findOne({
      where: { id: eventId },
    });
    if (!eventData) {
      throw new Error("Event not found");
    }
    res.status(200).json({
      eventData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateevent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const [updated] = await event.update(req.body, {
      where: { id: eventId },
    });
    if (updated) {
      const updatedevent = await event.findOne({ where: { id: eventId } });
      res.status(200).json({
        Event: updatedevent,
      });
    }
    throw new Error("Event not found");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const deleteevent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const deleted = await event.destroy({
      where: { id: eventId },
    });
    if (!deleted) {
      throw new Error("Event not found");
    }
    res.status(204).send("Event deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getAllevents = async (req, res) => {
  try {
    const events = await event.findAll();
    if(!events){
        throw new Error("No events found");
    }
    res.status(200).json({
      events,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  createevent,
  getevent,
  updateevent,
  deleteevent,
  getAllevents,
};
