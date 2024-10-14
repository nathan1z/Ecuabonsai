import React, { useEffect, useState } from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
export function Update() {
  const dataBonsai = [
    { id: 1, producto: "Bonsai1", descripcion: "El bonsái es una disciplina",foto:1,promocion:"10%" },
    { id: 2, producto: "Bonsai2", descripcion: "El bonsái es una disciplina",foto:2,promocion:"20%"  },
    { id: 3, producto: "Bonsai3", descripcion: "El bonsái es una disciplina",foto:3,promocion:"40%"  },
    { id: 4, producto: "Bonsai4", descripcion: "El bonsái es una disciplina",foto:4,promocion:"50%"  },
  ];
  const [data, setData] = useState(dataBonsai);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [bonsaiSeleccionado, setBonsaiSeleccionado] = useState({
    id: '',
    producto: '',
    descripcion: '',
    foto:'',
    promocion:''
  });

  const seleccionarBonsai=(elemento, caso)=>{
setBonsaiSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setBonsaiSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(bonsai=>{
      if(bonsai.id===bonsaiSeleccionado.id){
        bonsai.descripcion=bonsaiSeleccionado.descripcion;
        bonsai.producto=bonsaiSeleccionado.producto;
        bonsai.foto=bonsaiSeleccionado.foto;
        bonsai.promocion=bonsaiSeleccionado.promocion;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(bonsai=>bonsai.id!==bonsaiSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setBonsaiSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=bonsaiSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App">
      <h2>Actualizar Productos Catalogo</h2>
      <br />
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Foto</th>
            <th>Promocion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.producto}</td>
              <td>{elemento.descripcion}</td>
              <td>{elemento.foto}</td>
              <td>{elemento.promocion}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarBonsai(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarBonsai(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={bonsaiSeleccionado && bonsaiSeleccionado.id}
            />
            <br />

            <label>Promocion</label>
            <input
              className="form-control"
              type="text"
              name="producto"
              value={bonsaiSeleccionado && bonsaiSeleccionado.producto}
              onChange={handleChange}
            />
            <br />

            <label>Descripcion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={bonsaiSeleccionado && bonsaiSeleccionado.descripcion}
              onChange={handleChange}
            />
            <br />
            <label>Foto</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={bonsaiSeleccionado && bonsaiSeleccionado.foto}
              onChange={handleChange}
            />
            <br />
            <label>Promocion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={bonsaiSeleccionado && bonsaiSeleccionado.promocion}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el país {bonsaiSeleccionado && bonsaiSeleccionado.producto}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="producto"
              value={bonsaiSeleccionado ? bonsaiSeleccionado.producto: ''}
              onChange={handleChange}
            />
            <br />

            <label>Descripcion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={bonsaiSeleccionado ? bonsaiSeleccionado.descripcion: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}