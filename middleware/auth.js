import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData = jwt.verify(token, 'strongPassword')
        req.userId = decodedData?.id;

        next()

        // console.log(req.headers)
    } catch (error) {
        console.log(error)
    }
}

export default auth;