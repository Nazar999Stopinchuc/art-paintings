const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  return await res.text();
};

const getResource = async (url) => {
  let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not feath ${url}, ststus: ${res.status}`);
    }
  return await res.json();
};

export {postData, getResource};