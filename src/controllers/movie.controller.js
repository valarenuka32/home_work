const { movieService,musicService } = require("../services");

/** create movie */
const createmovie = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const movie = await movieService.createmovie(reqBody);
        if (!movie) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "movie detiles create successfully!",
            data: { movie },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get movie list
const getmovieList = async (req, res) => {
    try {
        const getList = await movieService.getmovieList();
        const getDetails = await musicService.getMusicList();

        res.status(200).json({
            success: true,
            message: "Get movie list successfully!",
            data: getList,
            getDetails
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const movieExists = await movieService.getmovieById(movieId);
        if (!movieExists) {
            throw new Error("movie detiles not found!");
        }

        await movieService.deleteRecord(movieId);

        res.status(200).json({
            success: true,
            message: "movie detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// update
const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;

        const movieExists = await movieService.getmovieById(movieId);
        if (!movieExists) {
            throw new Error("movie not found");
        }

        await movieService.updateDetails(movieId, req.body);

        res.status(200).json({
            success: true,
            message: "movie details update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createmovie,
    getmovieList,
    deleteRecord,
    updateMovie
};

