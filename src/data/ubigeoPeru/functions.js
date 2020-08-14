import departaments from "./departaments.json";
import provinces from "./provinces.json";
import districts from "./districts.json";

const getDepartaments = () => {
  return departaments.map((department) => ({
    id: department.id,
    label: department.name
  }));
};

const getProvinces = (codDepartment) => {
  return provinces
    .filter((province) => province.department_id === codDepartment)
    .map((province) => ({ id: province.id, label: province.name }));
};

const getDistricts = (codProvince) => {
  return districts
    .filter((district) => district.province_id === codProvince)
    .map((district) => ({ id: district.id, label: district.name }));
};

const getDepartment = (id) => {
  return departaments.filter((department) => department.id === id)[0];
};

export { getDepartaments, getProvinces, getDistricts, getDepartment };
