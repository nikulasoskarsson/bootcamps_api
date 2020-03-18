// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootCamps = (req, res, next) =>
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootCamp = (req, res, next) =>
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private
exports.createBootCamp = (req, res, ext) =>
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });

// @desc    Update bootcamp
// @route   Put /api/v1/bootcamps/
// @access  Private
exports.updateBootcamp = (req, res, ext) =>
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/
// @access  Private
exports.deleteBootCamp = (req, res, ext) =>
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
