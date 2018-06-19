exports.helloWorld = (req, res) => {
  console.log("It works");
  res.json({status:"success", result: {}});
};

