import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { flexColumn, modalStyle } from "../../style/globalStyle";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";

const UpdateModal = ({ open, setOpen, info, setInfo }) => {
  //? Put ve Post işlemlerini yapmak için useStockCall dan çekiyoruz.
    const { getCategorisData, putBlogsData } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  // const {putFirm,postFirm}=useStockCall()
  //   const { postStockData, putStockData } = useStockCall();

  //? Submit butonuna basınca open false oluyor ve modal kapanıyor info boş oluyor yazılar sılınıyor.
  //? eger info da id yoksa bu yen eklenecek üründür. Çünkü ürn ekelnirken id girilmiyor. Veri post yapılıp eklendikten sonra api bir id veriyor ve böylece gelen ınfo da eger ıd varsa bu edıt işlemini yapacagını anlıyoruz ve koşul ile put işlemine yönlendiriyoru.
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(info.id){
  //       putFirm(info)
  //   }else{
  //       postFirm(info)
  //       // postStockData(info,"firms")
  //   }
  //   setOpen(false);
  //   setInfo({});
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (info.id) {
    //   putStockData("firms", info);
    // } else {
    //   postStockData("firms", info);
    // }
    putBlogsData("blogs",info)

    setOpen(false);
    setInfo({});
  };

  //? ınput a bırsey yazdıgımızda bu veriler info state ne atılsın dıye setınfo yu yaptık. ınfo burada bır obje oldugu ıcın {} ile yazdık.
  //? name her ınput ıcın degısken oldugundan [name] şeklinde yazdık.value ise ınput ıcıne yazılan veri geliyor.
  const handleChange = (e) => {
    // setInfo({...info,[e.target.name]:e.target.value})
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleReset = () => {
    setInfo({
      title: "",
      content: "",
      image: "",
      category: "",
      status: "",
    });
  };
  useEffect(() => {
    getCategorisData("categories");
  }, []);
  return (
    <div>
      <Modal
        //? onClose da open false oluyor modal ı kapatıyor. ınfo yu boş obje atıyoruz. açıldıgında dırek boş olsun dıye.submit e tıklamadan çıkınca input yanı ınfo sıfırlanıyor.
        open={open}
        onClose={() => {
          setOpen(false);
          setInfo({});
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {/* //? Box componentine component="form" yazarak form özelliği kazandırıyoruz böyle onSubmit i burada kullanabiliyoruz.Onsubmit sorm da olması lazım!!! */}
          <Box component="form" sx={flexColumn} onSubmit={handleSubmit}>
            <Typography variant="h6" noWrap component="div">
              New Blog
            </Typography>
            <TextField
              label="Title"
              name="title"
              id="tile"
              type="text"
              variant="outlined"
              required
              //? info? buardakı optional cheining çok onemli çunku verı ılk olarak null geldiğinde hata verecektir.
              value={info?.title || ""}
              onChange={handleChange}
            />
            <TextField
              label="Image URL"
              name="image"
              id="image"
              type="url"
              required
              variant="outlined"
              value={info?.image || ""}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                required
                labelId="category"
                id="category"
                name="category"
                value={info?.category}
                label="Category"
                onChange={handleChange}
              >
                {/* //? categoris leri map ile dönerek MEnuitemleri bastık. selectler basılmış oldu. */}
                {categories?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                required
                labelId="status"
                id="status"
                name="status"
                value={info?.status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="d">Draft</MenuItem>
                <MenuItem value="p">Published</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Content"
              name="content"
              id="content"
              type="text"
              required
              variant="outlined"
              value={info?.content || ""}
              onChange={handleChange}
            />

            <Button onClick={handleReset} variant="contained" size="large">
              Reset Form
            </Button>
            <Button type="submit" variant="contained" size="large">
              Submit Form
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateModal;

//! bir statein yukarı taşınması Lifting Up tır
