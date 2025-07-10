// middleware/languageMiddleware.js
const setLanguage = (req, res, next) => {
  req.language = req.query.lang || 
                req.headers['accept-language'] || 
                'ar'; // افتراضي العربية
  next();
};

module.exports = setLanguage;