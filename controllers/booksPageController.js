module.exports = {
    get: async (req, res) => {
        try {
            await res.send('book page')
        }
        catch (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
    },
    post: async (req, res) => {
        try {
            await res.send('book page')
        }
        catch (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
    }
}