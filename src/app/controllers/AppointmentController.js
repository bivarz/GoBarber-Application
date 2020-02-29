class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    res.json({ message: 'hi' });
  }

  async store(req, res) {
    return res.json({ message: 'hi' });
  }
}

export default new AppointmentController();
