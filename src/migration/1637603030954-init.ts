import {MigrationInterface, QueryRunner} from "typeorm";

export class init1637603030954 implements MigrationInterface {
    name = 'init1637603030954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`street\` varchar(50) NOT NULL, \`district\` varchar(20) NOT NULL, \`city\` varchar(30) NOT NULL, \`state\` varchar(25) NOT NULL, \`country\` varchar(30) NOT NULL, \`cep\` varchar(15) NOT NULL, \`employeeId\` int NULL, UNIQUE INDEX \`REL_9b44dcf8132ae6af5d0efcaec1\` (\`employeeId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`email\` (\`id\` int NOT NULL AUTO_INCREMENT, \`subject\` varchar(80) NOT NULL, \`body\` varchar(1200) NOT NULL, \`address\` varchar(80) NOT NULL, \`sendDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`action_template\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(120) NOT NULL, \`emailId\` int NULL, UNIQUE INDEX \`REL_201b8ec5d519d02b8736bd74f8\` (\`emailId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`scheme\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(25) NOT NULL, \`lastName\` varchar(25) NOT NULL, \`position\` varchar(50) NOT NULL, \`phoneNumber\` varchar(20) NOT NULL, \`email\` varchar(80) NOT NULL, \`password\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`schemeId\` int NULL, \`actorId\` int NULL, \`employeeId\` int NULL, \`createdById\` int NULL, UNIQUE INDEX \`REL_52d32c0a640a1d320bed80abc1\` (\`schemeId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(25) NOT NULL, \`lastName\` varchar(25) NOT NULL, \`position\` varchar(50) NOT NULL, \`phoneNumber\` varchar(20) NOT NULL, \`email\` varchar(80) NOT NULL, \`project\` varchar(50) NOT NULL, \`department\` varchar(50) NOT NULL, \`actorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(25) NOT NULL, \`lastName\` varchar(25) NOT NULL, \`position\` varchar(50) NOT NULL, \`phoneNumber\` varchar(20) NOT NULL, \`email\` varchar(80) NOT NULL, \`project\` varchar(50) NOT NULL, \`department\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`action\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(120) NOT NULL, \`emailId\` int NULL, \`actorId\` int NULL, \`employeeId\` int NULL, UNIQUE INDEX \`REL_e5705bc1555410b9e0d301e9ba\` (\`emailId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`email_template\` (\`id\` int NOT NULL AUTO_INCREMENT, \`subject\` varchar(80) NOT NULL, \`body\` varchar(1200) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`address\` ADD CONSTRAINT \`FK_9b44dcf8132ae6af5d0efcaec1c\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`action_template\` ADD CONSTRAINT \`FK_201b8ec5d519d02b8736bd74f8f\` FOREIGN KEY (\`emailId\`) REFERENCES \`email\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`history\` ADD CONSTRAINT \`FK_52d32c0a640a1d320bed80abc1f\` FOREIGN KEY (\`schemeId\`) REFERENCES \`scheme\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`history\` ADD CONSTRAINT \`FK_13a7d1baf071900ac8be6f7ba32\` FOREIGN KEY (\`actorId\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`history\` ADD CONSTRAINT \`FK_310aa65a72f596aaf5ca7e92754\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`history\` ADD CONSTRAINT \`FK_0cf7829e3135b1f16b7ecd877d2\` FOREIGN KEY (\`createdById\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_5c1985fa34f8aa182bc429726b2\` FOREIGN KEY (\`actorId\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`action\` ADD CONSTRAINT \`FK_e5705bc1555410b9e0d301e9ba1\` FOREIGN KEY (\`emailId\`) REFERENCES \`email\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`action\` ADD CONSTRAINT \`FK_1378bf19bf2ca8a82203baff3c9\` FOREIGN KEY (\`actorId\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`action\` ADD CONSTRAINT \`FK_3de9bd5b2687791f3ca35e0dc9f\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`action\` DROP FOREIGN KEY \`FK_3de9bd5b2687791f3ca35e0dc9f\``);
        await queryRunner.query(`ALTER TABLE \`action\` DROP FOREIGN KEY \`FK_1378bf19bf2ca8a82203baff3c9\``);
        await queryRunner.query(`ALTER TABLE \`action\` DROP FOREIGN KEY \`FK_e5705bc1555410b9e0d301e9ba1\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_5c1985fa34f8aa182bc429726b2\``);
        await queryRunner.query(`ALTER TABLE \`history\` DROP FOREIGN KEY \`FK_0cf7829e3135b1f16b7ecd877d2\``);
        await queryRunner.query(`ALTER TABLE \`history\` DROP FOREIGN KEY \`FK_310aa65a72f596aaf5ca7e92754\``);
        await queryRunner.query(`ALTER TABLE \`history\` DROP FOREIGN KEY \`FK_13a7d1baf071900ac8be6f7ba32\``);
        await queryRunner.query(`ALTER TABLE \`history\` DROP FOREIGN KEY \`FK_52d32c0a640a1d320bed80abc1f\``);
        await queryRunner.query(`ALTER TABLE \`action_template\` DROP FOREIGN KEY \`FK_201b8ec5d519d02b8736bd74f8f\``);
        await queryRunner.query(`ALTER TABLE \`address\` DROP FOREIGN KEY \`FK_9b44dcf8132ae6af5d0efcaec1c\``);
        await queryRunner.query(`DROP TABLE \`email_template\``);
        await queryRunner.query(`DROP INDEX \`REL_e5705bc1555410b9e0d301e9ba\` ON \`action\``);
        await queryRunner.query(`DROP TABLE \`action\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP INDEX \`REL_52d32c0a640a1d320bed80abc1\` ON \`history\``);
        await queryRunner.query(`DROP TABLE \`history\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`scheme\``);
        await queryRunner.query(`DROP INDEX \`REL_201b8ec5d519d02b8736bd74f8\` ON \`action_template\``);
        await queryRunner.query(`DROP TABLE \`action_template\``);
        await queryRunner.query(`DROP TABLE \`email\``);
        await queryRunner.query(`DROP INDEX \`REL_9b44dcf8132ae6af5d0efcaec1\` ON \`address\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}
