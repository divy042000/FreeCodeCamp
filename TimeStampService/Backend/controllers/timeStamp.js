exports.timeStampDate = (req, res) => {
    let inputDate = req.params.date;
    if (!inputDate) {
        return res.status(400).send({ error: 'Missing date parameter.' });
    }

    // Append '-01-01' to the input if it doesn't contain any dashes
    if (!inputDate.includes('-')) {
        inputDate += '-01-01';
    }

    let dateObject = new Date(inputDate);

    if (isNaN(dateObject.getTime())) {
        return res.status(400).send({ error: 'Invalid date.' });
    }

    let unixTimestamp = Math.floor(dateObject.getTime());
    let utcDate = dateObject.toUTCString();

    let responseObject = {
        "unix": unixTimestamp,
        "utc": utcDate
    };

    res.json(responseObject);
};
