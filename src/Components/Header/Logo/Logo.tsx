import cls from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={cls.logo}>
      {/* <h1 className={cls.title}>Jobored</h1> */}
      <h1 className={cls.title}>
        <img src="public/images/logo.png" alt="logo" />
      </h1>
    </div>
  );
};
