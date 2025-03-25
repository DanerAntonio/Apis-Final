const UsuarioController = {
    getClientes: (req, res) => {
      const clientes = [
        { id: 1, nombre: 'Cliente 1' },
        { id: 2, nombre: 'Cliente 2' },
      ];
      res.status(200).json(clientes);
    },
  
    createCliente: (req, res) => {
      const nuevoCliente = req.body;
      console.log('Nuevo cliente creado:', nuevoCliente);
      res.status(201).json({ mensaje: 'Cliente creado', cliente: nuevoCliente });
    },
  };
  
  module.exports = UsuarioController;