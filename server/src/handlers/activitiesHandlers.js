const {createActivityController, getActivitiesController, deleteActivityController} = require("../controllers/activityControllers");

const postActivityHandler = async(req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;
    if(!name || !difficulty || !season) {
        return res.status(400).send("Name, difficulty and season are requiered");
    }
    try {
        const newActivity = await createActivityController(name, difficulty, duration, season, countries);
        res.status(201).send("Activity created successfully", newActivity);
    } catch (error) {
        if(
            error.message === "The activity must have at least one country"
        ){
        res.status(409).send(error.message);
        } else {
            res.status(500).send(error);
        }
    }
};

const getActivitiesHandler = async (req, res) => {
    try {
        const getAllActivities = await getActivitiesController();
        res.status(200).send(getAllActivities);
    } catch (error) {
        res.status(500).send(error);        
    }
};

const deleteActivityHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const activity = await deleteActivityController(id);
        res.status(200).json({message: "Activity deleted successfully", activity});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {postActivityHandler, getActivitiesHandler, deleteActivityHandler}