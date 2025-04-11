import User from "../models/user.js";

export const CreateUser = async (req, res) => {
    const user = req.body;
    console.log(user);

    if (!user) {
        return res.status(400).json({ "Message": "Invalid user object" });
    }

    try {
        const newUser = new User(user);
        await newUser.save();
        res.status(201).json({ "message": "User created successfully" });
    } catch (error) {
        res.status(500).json({ "Message": error.message });
    }
};

export const getAllUsers = async (req, res) =>{
    try{
        const users = await User.find();
        res.send(users);
        }catch (err){
            res.status(500).send(err);
        }
};

export const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('user not found');
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send('Todo not found');
        res.status(200).send({ message: 'user updated successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send('Todo not found');
        res.status(200).json({ message: 'user deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
};


