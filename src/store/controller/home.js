function addOrder(
  oldData,
  id,
  name,
  price,
  status,
  date,
  phoneNumber,
  address,
  image
) {
  return [
    { id, name, price, status, date, phoneNumber, address, image },
    ...oldData.filter(
        (item) => item.id !== id
      ),
  ];
}
function changOrderStatus(oldData, oldItem, id, newStatus) {
  var newData = [];
  var newItem = { oldItem };
  oldData.map((e) => {
    if (e.id === id) {
      newItem = {
        ...e,
        ...oldItem,
        status: newStatus,
      };
      newData.push(newItem);
    } else {
      newData.push(e);
    }
  });
  return { newData, newItem };
}

function addDriver(oldData, driver) {
  return {
    ...oldData,
    driver,
  };
}
export { addOrder, changOrderStatus, addDriver };
