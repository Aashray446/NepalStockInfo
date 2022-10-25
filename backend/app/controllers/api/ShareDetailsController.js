const Model = require('#models/ShareDetails');

module.exports = function ModelController() {
    const _create = (req, res) => {
        // body is part of a form-data
        const shareDetail = req.body;
        console.log(req)
        console.log(shareDetail)
        Model
            .create({
                imgUrl: shareDetail.imgUrl,
                category: shareDetail.category,
                company: shareDetail.company,
                description: shareDetail.description,
                eps: shareDetail.eps,
                peRation: shareDetail.peRation,
                paidUpCapital: shareDetail.paidUpCapital,
                bookValue: shareDetail.bookValue,
                marketCap: shareDetail.marketCap,
                ltd: shareDetail.ltd,
                dividendHistory: shareDetail.dividendHistory,
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

                return res.status(500).json({ msg: 'Internal server error' });
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
        const { id } = req.params;
        console.log(req)
        Model
            .findOne({
                where: {
                    id,
                },
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

    const _update = (req, res) => {
        // params is part of an url
        const { id } = req.params;

        // body is part of form-data
        const { value } = req.body;

        Model
            .findByPk(id)
            .then((model) => {
                if (!model) {
                    return res.status(400).json({ msg: 'Bad Request: Model not found' });
                }

                return model
                    .update({
                        key: value,
                    }).then((updatedModel) => {
                        return res.status(200).json({ updatedModel });
                    });
            })
            .catch((err) => {
                // better save it to log file
                console.error(err);

                return res.status(500).json({ msg: 'Internal server error' });
            });
    };

    const _destroy = (req, res) => {
        // params is part of an url
        const { id } = req.params;

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
        update: _update,
        destroy: _destroy
    };
};