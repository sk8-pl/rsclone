import { useState } from "react";
import { Modal, Button } from "antd";
import FormBooking from "./form-booking";

const ModalForm = (props: any) => {
  const data = props.data;
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Забронировать номер
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={850}
        cancelText="Отмена"
        okText="Забронировать"
      >
        <FormBooking data={props.data} />
      </Modal>
    </>
  );
};

export default ModalForm;
