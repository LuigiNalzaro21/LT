    const express = require('express')
    require('dotenv').config()
    const mongoose = require('mongoose')
    const cors = require('cors')    
    const signinModel = require('./model/signinModel')
    const signupModel = require('./model/signupModel')
    const Teachers = require('./model/Teachers')
    const Question = require('./model/Question')
    const bodyParser = require('body-parser');


    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(bodyParser.json());

    // get 
    app.get('/', async (req, res)=> {
        const data = await signupModel.find();

        res.json({ success: true, data : data })
    })

    // signup.jsx
    app.post('/create', async (req, res)=> {
        console.log(req.body)
        const date = new signupModel(req.body)
        await date.save()

        res.send({ success: true, message : "data saved successfully" })
    })

    // POST endpoint for sign-in
    app.post('/signin', (req, res) => {
        const { email, password } = req.body;
        // Perform authentication logic here
        // Assuming authentication is successful for demonstration
        const success = true;
        const message = 'Sign-in successful';
        if (success) {
        res.status(200).json({ success: true, message });
        } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    });

    // add.jsx
    app.post('/add', async (req, res) => {
        try {
            const newTeacher = new Teachers(req.body);
            await newTeacher.save();
            res.status(201).json({ success: true, message: "Instructor added successfully" });
        } catch (error) {
            console.error('Error adding instructor:', error);
            res.status(500).json({ success: false, message: "Failed to add instructor" });
        }
    });

    // view.jsx & form.jsx
    app.get('/teachers', async (req, res) => {
        try {
            const teachers = await Teachers.find();
            res.json({ success: true, data: teachers });
        } catch (error) {
            console.error('Error fetching teachers data:', error);
            res.status(500).json({ success: false, message: "Failed to fetch teachers data" });
        }
    });

    // view.jsx: DELETE route to delete a teacher record
    app.delete('/teachers/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const deletedTeacher = await Teachers.findByIdAndDelete(id);
            if (!deletedTeacher) {
                return res.status(404).json({ success: false, message: "Teacher not found" });
            }
            res.json({ success: true, message: "Teacher deleted successfully" });
        } catch (error) {
            console.error('Error deleting teacher:', error);
            res.status(500).json({ success: false, message: "Failed to delete teacher" });
        }
    });

    // view.jsx: Update teacher record
    app.put('/teachers/:id', async (req, res) => {
        try {
        const { id } = req.params;
        const updatedTeacher = await Teachers.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTeacher) {
            return res.status(404).json({ success: false, message: "Teacher not found" });
        }
        res.json({ success: true, message: "Teacher updated successfully", data: updatedTeacher });
        } catch (error) {
        console.error('Error updating teacher:', error);
        res.status(500).json({ success: false, message: "Failed to update teacher" });
        }
    });

    // main.jsx: Route to get the count of teachers
    app.get('/teachers/count', async (req, res) => {
        try {
            const count = await Teachers.countDocuments();
            res.json({ success: true, count });
        } catch (error) {
            console.error('Error fetching count of teachers:', error);
            res.status(500).json({ success: false, message: "Failed to fetch count of teachers" });
        }
    });

    // questions.jsx: POST endpoint to add questions
    app.post('/questions', async (req, res) => {
        try {
            const { questions } = req.body;
            // Assuming questions is an array of strings
            for (const question of questions) {
                const newQuestion = new Question({
                    question: question,
                });
                await newQuestion.save();
            }
            res.status(201).json({ success: true, message: "Questions added successfully" });
        } catch (error) {
            console.error('Error adding questions:', error);
            res.status(500).json({ success: false, message: "Failed to add questions" });
        }
    });

    // form.jsx & sheets.jsx: GET endpoint to fetch all questions
    app.get('/questions', async (req, res) => {
        try {
            const questions = await Question.find({}, 'question');
            res.json({ success: true, questions });
        } catch (error) {
            console.error('Error fetching questions:', error);
            res.status(500).json({ success: false, message: "Failed to fetch questions" });
        }
    });

    // sheets.jsx: DELETE route to delete a question record
    app.delete('/questions/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const deletedQuestion = await Question.findByIdAndDelete(id);
            if (!deletedQuestion) {
                return res.status(404).json({ success: false, message: "Question not found" });
            }
            res.json({ success: true, message: "Question deleted successfully" });
        } catch (error) {
            console.error('Error deleting question:', error);
            res.status(500).json({ success: false, message: "Failed to delete question" });
        }
    });

    // sheets.jsx: PUT endpoint to update a question record
    app.put('/questions/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const { question } = req.body; // Extract the updated question from the request body
            const updatedQuestion = await Question.findByIdAndUpdate(id, { question }, { new: true });
            if (!updatedQuestion) {
                return res.status(404).json({ success: false, message: "Question not found" });
            }
            res.json({ success: true, message: "Question updated successfully", data: updatedQuestion });
        } catch (error) {
            console.error('Error updating question:', error);
            res.status(500).json({ success: false, message: "Failed to update question" });
        }
    });
 
    mongoose.connect(process.env.MONGO_DB)
            .then(()=> {
                app.listen(process.env.PORT, ()=> {
                    console.log('server start')
                })
            })
            .catch((error)=> {
                console.log(error)
            })
