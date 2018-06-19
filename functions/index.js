exports.helloWorld = (req, res) => {
  console.log("It still works");
  res.json({
    status:"success",
    result: {
      "statement": "Hello World!"
    }
  });
};

