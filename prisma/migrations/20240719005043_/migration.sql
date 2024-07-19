-- CreateTable
CREATE TABLE `digimons` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `level` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `digimons_id_key`(`id`),
    UNIQUE INDEX `digimons_imgUrl_key`(`imgUrl`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
