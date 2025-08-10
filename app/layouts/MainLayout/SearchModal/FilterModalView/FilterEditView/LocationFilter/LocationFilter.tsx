import type { RecruitLocation } from "@types";
import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { MdCheck, MdClose } from "react-icons/md";

import usePalette from "~/hooks/usePalette";

import * as S from "./LocationFilter.styles";

interface LocationFilterProps {
  value: RecruitLocation[] | null;
  onChange: (value: RecruitLocation[] | null) => void;
}

interface RegionData {
  [first: string]: {
    [second: string]: string[];
  };
}

export default function LocationFilter({
  value,
  onChange,
}: LocationFilterProps) {
  const palette = usePalette("background");

  const [regionData, setRegionData] = useState<RegionData>({});
  const [selectedFirst, setSelectedFirst] = useState<string | null>(null);
  const [selectedSecond, setSelectedSecond] = useState<string | null>(null);

  useEffect(() => {
    const parseCSV = async () => {
      const response = await fetch("/region.csv");
      const text = await response.text();
      const lines = text.split("\n").slice(1);

      const data: RegionData = {};
      for (const line of lines) {
        const [, first, second, third] = line.split(",");
        if (first && second && third) {
          if (!data[first]) data[first] = {};
          if (!data[first][second]) data[first][second] = [];
          if (!data[first][second].includes(third)) {
            data[first][second].push(third);
          }
        }
      }
      setRegionData(data);
    };
    parseCSV();
  }, []);

  const selectedLocations = useMemo(() => value || [], [value]);

  const handleThirdLevelClick = (
    first: string,
    second: string,
    third: string
  ) => {
    const newLocation = { first, second, third };
    const isSelected = selectedLocations.some(
      (loc) =>
        loc.first === first && loc.second === second && loc.third === third
    );

    let newSelection;
    if (isSelected) {
      newSelection = selectedLocations.filter(
        (loc) =>
          !(loc.first === first && loc.second === second && loc.third === third)
      );
    } else {
      newSelection = [...selectedLocations, newLocation];
    }
    onChange(newSelection.length > 0 ? newSelection : null);
  };

  const firstKeys = Object.keys(regionData);
  const secondKeys = selectedFirst
    ? Object.keys(regionData[selectedFirst])
    : [];
  const thirdKeys =
    selectedFirst && selectedSecond
      ? regionData[selectedFirst][selectedSecond]
      : [];

  return (
    <S.Wrapper>
      <S.Body>
        <S.Column>
          {firstKeys.map((first) => (
            <S.Item
              key={first}
              $isSelected={selectedFirst === first}
              $hasChildren
              onClick={() => {
                setSelectedFirst(first);
                setSelectedSecond(null);
              }}
            >
              {first}
            </S.Item>
          ))}
        </S.Column>
        <S.Column>
          {selectedFirst &&
            secondKeys.map((second) => (
              <S.Item
                key={second}
                $isSelected={selectedSecond === second}
                $hasChildren
                onClick={() => setSelectedSecond(second)}
              >
                {second}
              </S.Item>
            ))}
        </S.Column>
        <S.Column>
          {selectedFirst &&
            selectedSecond &&
            thirdKeys.map((third) => {
              const isSelected = selectedLocations.some(
                (loc) =>
                  loc.first === selectedFirst &&
                  loc.second === selectedSecond &&
                  loc.third === third
              );
              return (
                <S.Item
                  key={third}
                  $isSelected={isSelected}
                  $hasChildren={false}
                  onClick={() =>
                    handleThirdLevelClick(selectedFirst, selectedSecond, third)
                  }
                >
                  {third}
                  {isSelected && <MdCheck />}
                </S.Item>
              );
            })}
        </S.Column>
      </S.Body>
      <S.LocationContainer>
        <AnimatePresence mode="popLayout" initial={false}>
          {selectedLocations.map((loc) => (
            <S.LocationWrapper
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                default: {
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                },
                layout: { ease: "easeInOut", duration: 0.3 },
              }}
              key={`${loc.first}-${loc.second}-${loc.third}`}
              onClick={() =>
                handleThirdLevelClick(loc.first, loc.second, loc.third)
              }
              palette={palette}
            >
              <S.Location>
                {`${loc.second} ${loc.third}`}
                <MdClose size={18} />
              </S.Location>
            </S.LocationWrapper>
          ))}
        </AnimatePresence>
      </S.LocationContainer>
    </S.Wrapper>
  );
}
