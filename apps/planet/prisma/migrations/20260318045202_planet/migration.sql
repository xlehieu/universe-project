-- CreateEnum
CREATE TYPE "PlanetType" AS ENUM ('terrestrial', 'gas_giant', 'ice_giant', 'dwarf', 'super_earth', 'sub_earth');

-- CreateTable
CREATE TABLE "planets" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PlanetType" NOT NULL,
    "description" TEXT,
    "position_x" DOUBLE PRECISION NOT NULL,
    "position_y" DOUBLE PRECISION NOT NULL,
    "position_z" DOUBLE PRECISION NOT NULL,
    "orbital_radius_au" DOUBLE PRECISION NOT NULL,
    "orbital_period_days" DOUBLE PRECISION NOT NULL,
    "rotation_period_hours" DOUBLE PRECISION,
    "radius_km" DOUBLE PRECISION NOT NULL,
    "mass_kg" DOUBLE PRECISION,
    "gravity_ms2" DOUBLE PRECISION,
    "atmosphere" TEXT,
    "temp_min" DOUBLE PRECISION,
    "temp_max" DOUBLE PRECISION,
    "habitable" BOOLEAN NOT NULL DEFAULT false,
    "rings" BOOLEAN NOT NULL DEFAULT false,
    "ring_inner_radius_km" DOUBLE PRECISION,
    "ring_outer_radius_km" DOUBLE PRECISION,
    "ring_color_hex" TEXT,
    "color_hex" TEXT,
    "texture" TEXT,
    "moons_count" INTEGER NOT NULL DEFAULT 0,
    "solar_system_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moons" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "texture" TEXT,
    "orbital_radius_km" DOUBLE PRECISION NOT NULL,
    "radius_km" DOUBLE PRECISION NOT NULL,
    "color_hex" TEXT,
    "planet_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "moons" ADD CONSTRAINT "moons_planet_id_fkey" FOREIGN KEY ("planet_id") REFERENCES "planets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
