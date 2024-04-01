// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PatientRecord {
    struct Patient {
        uint id; // ลดขนาดของชนิดข้อมูลเพื่อประหยัด gas
        string name;
        string gender;
        uint8 age; // ลดขนาดของชนิดข้อมูลเพื่อประหยัด gas
        string bloodType;
        // string Address;
        string phoneNumber;
        string drugAllergy;
        string congenitalDisease;
    }

    mapping(uint => Patient) public patients;

    function addPatient(
        uint8 _id,
        string memory _name,
        string memory _gender,
        uint8 _age,
        string memory _bloodType,
        // string memory _address,
        string memory _phoneNumber,
        string memory _drugAllergy,
        string memory _congenitalDisease
    ) public {
        patients[_id] = Patient(
            _id,
            _name,
            _gender,
            _age,
            _bloodType,
            // _address,
            _phoneNumber,
            _drugAllergy,
            _congenitalDisease
        );
    }

    function getPatient(uint _id)
        public
        view
        returns (
            uint,
            string memory,
            string memory,
            uint8,
            string memory,
            // string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Patient memory patient = patients[_id];
        return (
            patient.id,
            patient.name,
            patient.gender,
            patient.age,
            patient.bloodType,
            patient.phoneNumber,
            patient.drugAllergy,
            patient.congenitalDisease
        );
    }
}
