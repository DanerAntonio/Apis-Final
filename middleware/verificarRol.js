const verificarRol = (rol) => (req, res, next) => {
  if (req.user.rol !== rol) {
    return res.status(403).json({ message: 'Acceso denegado. No tienes permiso para realizar esta acción.' });
  }
  next();
};

module.exports = verificarRol;