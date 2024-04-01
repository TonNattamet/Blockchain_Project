// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PatientRecord {
    struct Patient {
        uint8 id; // ลดขนาดของชนิดข้อมูลเพื่อประหยัด gas
        string name;
        // string gender;
        uint8 age; // ลดขนาดของชนิดข้อมูลเพื่อประหยัด gas
        // uint16 height; // ลดขนาดของชนิดข้อมูลเพื่อประหยัด gas
        // uint16 weight; // ลดขนาดของชนิดข้อมูลเพื่อประหยัด gas
        string Address;
        string phoneNumber;
        string drugAllergy;
        string congenitalDisease;
    }

    mapping(uint8 => Patient) public patients;

    function addPatient(
        uint8 _id,
        string memory _name,
        // string memory _gender,
        uint8 _age,
        // uint16 _height,
        // uint16 _weight,
        string memory _address,
        string memory _phoneNumber,
        string memory _drugAllergy,
        string memory _congenitalDisease
    ) public {
        patients[_id] = Patient(
            _id,
            _name,
            // _gender,
            _age,
            // _height,
            // _weight,
            _address,
            _phoneNumber,
            _drugAllergy,
            _congenitalDisease
        );
    }

    function getPatient(uint8 _id)
        public
        view
        returns (
            uint8,
            string memory,
            // string memory,
            uint8,
            // uint16,
            // uint16,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Patient memory patient = patients[_id];
        return (
            patient.id,
            patient.name,
            // patient.gender,
            patient.age,
            // patient.height,
            // patient.weight,
            patient.Address,
            patient.phoneNumber,
            patient.drugAllergy,
            patient.congenitalDisease
        );
    }
}
