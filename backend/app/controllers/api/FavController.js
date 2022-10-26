const Model = require('#models/Fav');
const ShareDetails = require('#models/ShareDetails');

module.exports = function ModelController() {
    const _create = (req, res) => {
        // body is part of a form-data
        const fav = req.body;
        if (req.token.id == null) {
            return res.status(401).json({ message: 'Please Log In Continue' });
        }
        Model
            .create({
                ShareDetailId: fav.shareDetailId,
                UserId: req.token.id
            })
            .then((model) => {
                if (!model) {
                    return res.status(400).json({ msg: 'Bad Request: Model not found' });
                }

                return res.status(200).json({ model });
            })
            .catch((err) => {
                // better save it to log file
                console.error(err);

                return res.status(500).json({ msg: 'Already Existed In Fav List' });
            });
    };

    const _getAll = (req, res) => {
        Model
            .findAll()
            .then((models) => {
                if (!models) {
                    return res.status(400).json({ msg: 'Bad Request: Models not found' });
                }

                return res.status(200).json({ models });
            })
            .catch((err) => {
                // better save it to log file
                console.error(err);

                return res.status(500).json({ msg: 'Internal server error' });
            });
    };

    const _get = (req, res) => {
        // params is part of an url
        const userId = req.token.id
        Model
            .findAll({
                where: {
                    userId,
                },
                include: [{
                    model: ShareDetails,
                }]
            })
            .then((model) => {
                if (!model) {
                    return res.status(400).json({ msg: 'Bad Request: Model not found' });
                }

                return res.status(200).json({ model });
            })
            .catch((err) => {
                // better save it to log file
                console.error(err);

                return res.status(500).json({ msg: 'Internal server error' });
            });
    };

    const _destroy = (req, res) => {
        // params is part of an url
        const id = req.body.id

        Model
            .findByPk(id)
            .then((model) => {
                if (!model) {
                    return res.status(400).json({ msg: 'Bad Request: Model not found' })
                }

                model.destroy().then(() => {
                    return res.status(200).json({ msg: 'Successfully destroyed model' });
                }).catch((err) => {
                    // better save it to log file
                    console.error(err);

                    return res.status(500).json({ msg: 'Internal server error' });
                });
            })
            .catch((err) => {
                // better save it to log file
                console.error(err);

                return res.status(500).json({ msg: 'Internal server error' });
            });
    };

    // !IMPORTANT!
    // don't forget to return the functions:
    return {
        create: _create,
        getAll: _getAll,
        get: _get,
        destroy: _destroy
    };
};