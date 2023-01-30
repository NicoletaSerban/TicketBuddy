const TicketTask = require("../models/ticketList");

module.exports = {
  deleteTicket: (req, res) => {
    const id = req.params.id;
    TicketTask.findByIdAndRemove(id, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  },
  updateTicket: (req, res) => {
    const id = req.params.id;
    TicketTask.findByIdAndUpdate(
      id,
      {
        status: "Closed",
      },
      (err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/");
      }
    );
  },
};
