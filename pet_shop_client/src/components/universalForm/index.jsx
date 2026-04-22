import { Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { resetState } from "../../redux/slices/postSlice";

function UniversalForm({
  onSubmit,
  children,
  background,
  backgroundIn,
  padding,
  color,
  success,
  colorPl,
  loading,
  resetSuccess,
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
      <Modal
        title="Success"
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        okText="OK"
      >
        <h3>Request sent successfully 🎉</h3>
        <img src="src/assets/images/catGif.gif" />
      </Modal>
    </div>
  );
}

export default UniversalForm;
