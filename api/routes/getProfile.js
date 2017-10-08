export default (req, res) => {
  res.json({
    success: true,
    profile: {
      name: 'John',
      experiments: []
    }
  })
}
