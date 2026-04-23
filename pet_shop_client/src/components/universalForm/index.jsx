import { Input, Modal, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { resetState } from "../../redux/slices/postSlice";
import { Link } from "react-router-dom";

function UniversalForm({
  onSubmit,
  children,
  background,
  backgroundIn,
  padding,
  color,
  success,
  colorPl,
  resetSuccess,
  isAddProductBtn,
  titleModal,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });
  const dispatch = useDispatch();

  const submitHandler = async (data) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (success) {
      setIsModalOpen(true);
      reset();
      setTimeout(() => {
        dispatch(resetState());
      }, 1500);
    }
  }, [success, reset, dispatch]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetSuccess();
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        className={styles.form}
        style={{ backgroundColor: background, padding: padding }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <Input
              {...field}
              style={{
                backgroundColor: backgroundIn,
                "--placeholder-color": colorPl,
                color: color,
              }}
              className={styles.input}
              placeholder="Name"
            />
          )}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}

        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <Input
              {...field}
              style={{
                backgroundColor: backgroundIn,
                "--placeholder-color": colorPl,
                color: color,
              }}
              className={styles.input}
              placeholder="Phone number"
            />
          )}
        />
        {errors.phone && (
          <span className={styles.error}>{errors.phone.message}</span>
        )}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <Input
              {...field}
              style={{
                backgroundColor: backgroundIn,
                "--placeholder-color": colorPl,
                color: color,
              }}
              className={styles.input}
              placeholder="Email"
            />
          )}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}

        {children}
      </form>

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "rgba(13, 80, 255, 1)",
              colorText: "#fff",
            },
          },
        }}
      >
        <Modal
          centered
          closeIcon={<span style={{ color: "#fff" }}>✕</span>}
          open={isModalOpen}
          footer={null}
          onCancel={handleCloseModal}
        >
          {!isAddProductBtn ? (
            <>
              <h3>Congratulations!</h3>
              <h4>{titleModal}</h4>
              <img
                className={styles.imgModal}
                src="src/assets/images/catGif.gif"
              />
            </>
          ) : (
            <Link to="/allProducts">
              <div className={styles.absolut}>
                <h4 className={styles.textModal}>First add a product!</h4>
                <h4 className={styles.textLink}>Go to products.</h4>
                <img
                  className={styles.imgLink}
                  src="src/assets/images/spin.gif"
                />
              </div>
            </Link>
          )}
        </Modal>
      </ConfigProvider>
    </div>
  );
}

export default UniversalForm;
