export default (req, res) => {
  res.json({
    success: true,
    experiment: {
      id: req.params.experimentId,
      status: 'active',
      title: 'Experiment Title',
      description: 'Experiment description',
      tags: ['tag1', 'tag2'],
      sample_size: 198
    }
  })
}
