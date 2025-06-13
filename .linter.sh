#!/bin/bash
cd /home/kavia/workspace/code-generation/transitpulse-india-39016-6d893b6d/transitpulse_india
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

