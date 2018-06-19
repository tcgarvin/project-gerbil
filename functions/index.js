exports.helloWorld = (req, res) => {
  console.log("It didn't. (3)");
  res.json({
    status:"success",
    result: {
      "statement": "Hello World! (3)"
    }
  });
};

